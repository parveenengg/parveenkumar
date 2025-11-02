# Portfolio Project Structure

## 📁 Organized Folder Structure

```
Portfolio-1/
├── index.html                 # Main homepage
├── pages/                     # All HTML pages
│   ├── work.html             # Work listing page
│   └── work/                 # Individual project pages
│       ├── syncpad.html
│       └── college-management.html
│
├── assets/                    # All static assets
│   ├── images/               # Images and photos
│   │   └── Profile.WEBP
│   ├── icons/                # Favicons and icons
│   │   ├── favicon.svg
│   │   └── favicon.ico
│   └── figma/                # Figma design files (protected)
│       ├── TS00001.fig
│       └── [documentation files]
│
├── css/                       # Stylesheets
│   ├── style.css             # Main styles
│   └── cursor.css            # Custom cursor styles
│
├── js/                        # JavaScript files
│   ├── script.js             # Main scripts
│   └── cursor.js             # Cursor functionality
│
├── scripts/                   # Utility scripts
│   └── protect-figma-files.sh
│
└── README.md                  # Project documentation
```

## 🔗 Path References

### From Root (index.html)
- CSS: `css/style.css`, `css/cursor.css`
- JS: `js/script.js`, `js/cursor.js`
- Images: `assets/images/Profile.WEBP`
- Icons: `assets/icons/favicon.svg`
- Pages: `pages/work.html`, `pages/work/*.html`

### From pages/ (work.html)
- CSS: `../css/style.css`, `../css/cursor.css`
- JS: `../js/script.js`, `../js/cursor.js`
- Icons: `../assets/icons/favicon.svg`
- Home: `../index.html`
- Work Pages: `work/*.html`

### From pages/work/ (project pages)
- CSS: `../../css/style.css`, `../../css/cursor.css`
- JS: `../../js/script.js`, `../../js/cursor.js`
- Icons: `../../assets/icons/favicon.svg`
- Figma: `../../assets/figma/TS00001.fig`
- Home: `../../index.html`
- Work: `../work.html`

## ✅ Benefits of This Structure

1. **Clean Organization**: All files grouped by type
2. **Easy Maintenance**: Find files quickly
3. **Scalable**: Easy to add more assets/pages
4. **Professional**: Industry-standard structure
5. **Protected Assets**: Figma files safely stored and protected

## 🔒 Protected Files

- Figma files in `assets/figma/` are read-only
- Use `scripts/protect-figma-files.sh` to restore protection after edits

