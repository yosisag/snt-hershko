#!/bin/bash

# שם התיקייה הראשית
PROJECT_NAME="snt-hershko"

# יצירת התיקייה הראשית
mkdir -p $PROJECT_NAME

# כניסה לתיקייה הראשית
cd $PROJECT_NAME

# יצירת מבנה התיקיות
mkdir -p assets/{images/{services},icons,fonts}
mkdir -p css
mkdir -p js
mkdir -p includes

# יצירת קבצים ריקים
touch index.html
touch css/{styles.css,responsive.css,animations.css}
touch js/{main.js,animations.js}

# יצירת קובץ README.md בסיסי
echo "# ש.נ.ת הרשקו - פרויקט אתר
פרויקט אתר עבור חברת ש.נ.ת הרשקו

## מבנה התיקיות
- assets/: תמונות, אייקונים ופונטים
- css/: קבצי עיצוב
- js/: קבצי JavaScript
- includes/: קבצים נוספים" > README.md

# הודעת סיום
echo "מבנה הפרויקט נוצר בהצלחה!"
echo "התיקייה הראשית: $PROJECT_NAME" 