const fs = require('fs');
const path = require('path');

const API_KEY = "c3333d6b964e86424fcc05bfc6cd7a6a";
const CREATE_URL = "https://api.kie.ai/api/v1/jobs/createTask";
const STATUS_URL = "https://api.kie.ai/api/v1/jobs/recordInfo";

async function generateImage(prompt, filename, options = {}) {
  const {
    aspect_ratio = "16:9",
    resolution = "2K",
    output_format = "png"
  } = options;

  console.log(`Generating image: ${filename}...`);

  const res = await fetch(CREATE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "nano-banana-2",
      input: { prompt, aspect_ratio, resolution, output_format }
    })
  });

  const { data } = await res.json();
  const taskId = data.taskId;

  // Poll for completion
  let state = "waiting";
  let resultJson;
  while (state === "waiting") {
    await new Promise(r => setTimeout(r, 5000));
    const poll = await fetch(`${STATUS_URL}?taskId=${taskId}`, {
      headers: { "Authorization": `Bearer ${API_KEY}` }
    });
    const pollData = await poll.json();
    state = pollData.data.state;
    resultJson = pollData.data.resultJson;
  }

  if (state === "success") {
    const urls = JSON.parse(resultJson).resultUrls;
    const imageUrl = urls[0];
    // Download to public/images/
    const imgRes = await fetch(imageUrl);
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    const outPath = path.join(process.cwd(), "public", "images", filename);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, buffer);
    console.log(`Saved: ${outPath}`);
    return `/images/${filename}`;
  } else {
    console.error(`Image generation failed for ${filename}`);
    return null;
  }
}

module.exports = { generateImage };
