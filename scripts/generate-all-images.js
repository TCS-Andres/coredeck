const { generateImage } = require('../lib/generate-image');

const images = [
  {
    filename: "hero-dashboard.png",
    prompt: "A sleek, modern SaaS dashboard UI mockup on a laptop and phone screen, dark navy blue interface with gold accent highlights, showing notification cards, calendar events, and a priority action queue. Clean minimal background with soft gradient. Professional product screenshot style, ultra-realistic, 4K render.",
    options: { aspect_ratio: "16:9", resolution: "2K" }
  },
  {
    filename: "problem-chaos.png",
    prompt: "A frustrated diverse college student surrounded by floating app icons and notification bubbles — Canvas, LinkedIn, Gmail, work schedule apps — looking overwhelmed. Soft lighting, modern illustration style with navy blue and muted gold color palette. Editorial tech illustration.",
    options: { aspect_ratio: "16:9", resolution: "1K" }
  },
  {
    filename: "solution-calm.png",
    prompt: "A confident diverse young professional smiling while looking at a single clean dashboard on their phone, all notifications organized. Calm, empowering mood. Modern photography style, soft studio lighting, navy blue tones.",
    options: { aspect_ratio: "16:9", resolution: "1K" }
  },
  {
    filename: "feature-action-queue.png",
    prompt: "A close-up UI mockup of an AI-powered notification priority queue, showing color-coded cards: red for urgent recruiter message, yellow for upcoming exam deadline, green for shift reminder. Dark navy UI with gold accents, clean minimal design, product screenshot style.",
    options: { aspect_ratio: "4:3", resolution: "1K" }
  },
  {
    filename: "feature-integrations.png",
    prompt: "A clean tech illustration showing app logos (email, calendar, LMS, LinkedIn) connected by glowing gold lines flowing into a central hexagonal hub. Dark navy blue background, circuit-board aesthetic, modern flat design.",
    options: { aspect_ratio: "4:3", resolution: "1K" }
  },
  {
    filename: "feature-deadline-tracker.png",
    prompt: "A UI mockup of a unified calendar/timeline view merging school deadlines, job interviews, and work shifts into color-coded rows. Clean dark navy interface with gold highlights, modern SaaS product screenshot.",
    options: { aspect_ratio: "4:3", resolution: "1K" }
  },
  {
    filename: "testimonial-bg.png",
    prompt: "An abstract background with soft navy blue gradient, subtle geometric hexagon patterns, and faint gold circuit-line accents. Elegant, minimal, suitable as a text overlay background.",
    options: { aspect_ratio: "16:9", resolution: "1K" }
  },
  {
    filename: "cta-bg.png",
    prompt: "A bold gradient background blending deep navy blue to royal blue with scattered gold particle dots and subtle hexagon wireframes. Modern, energetic, suitable for a call-to-action banner.",
    options: { aspect_ratio: "16:9", resolution: "1K" }
  },
];

async function main() {
  console.log(`Starting generation of ${images.length} images...\n`);

  for (const img of images) {
    try {
      await generateImage(img.prompt, img.filename, img.options);
    } catch (err) {
      console.error(`Failed to generate ${img.filename}:`, err.message);
    }
    console.log('');
  }

  console.log('Done! All images processed.');
}

main();
