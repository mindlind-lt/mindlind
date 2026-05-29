# Tech Stack

This is a compiled Framer website using the following technologies:

## Core Libraries
- **React** - UI framework
- **Framer** - Design/development platform (compiled)
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics library
- **CSS2DRenderer** - Three.js plugin for DOM-based labels

## Project Structure
```
mindlind/
├── index.html              # Entry point
├── style.css               # Compiled styles
├── assets/
│   ├── fonts/              # Web fonts
│   ├── images/             # Image assets
│   └── js/
│       ├── react.mjs       # React runtime
│       ├── framer.mjs      # Framer runtime
│       ├── motion.mjs      # Framer Motion
│       ├── script_main.mjs # Main app entry
│       ├── page-*.mjs      # Page components
│       ├── component-*.mjs # Reusable components
│       └── *.mjs           # Other utilities/vendor code
├── tools/                  # Analysis scripts
├── docs/                   # Documentation
└── reports/                # Generated analysis reports
```
