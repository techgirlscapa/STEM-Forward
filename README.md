# STEM Forward website

Static site for CAPA-HC STEM Forward, modeled on the last TechGirls site (https://techgirls-capa.com) with official STEM Forward and tutor-application copy.

## Open locally
Open `index.html` in a browser, or from this folder run:

```
python3 -m http.server 8080
```

Then visit http://localhost:8080

## Pages
- Home, About, Programs, Tutors, Schools, In Action, Contact
- 10 school pages under `schools/`

## Add photos and tutor videos later
Each school has empty folders:

`media/schools/<school-slug>/photos/`
`media/schools/<school-slug>/videos/`

Slugs: bryant-woods, running-brook, centennial-lane, st-johns-lane, thunder-hill, talbott-springs, northfield, veterans, longfellow, bellows-spring

Then point the placeholder boxes on that school page at the new files.

Program-wide tutor training photos (not tied to one school):

`media/program/training/`

Also: `media/program/field-trips/` and `media/program/graduation/`

They display on the In Action page.

## Key links already wired
- Tutor application: https://forms.gle/pkkP2wbVA9qNufhp8
- Email: stemforward@capa-hc.org

Fall 2026 sites match the official weekly schedule workbook (rooms, site leads, tutors, and 10 lesson dates per school).


## School exterior / campus photo (optional)

To use a school picture as the card thumbnail and page banner, add one file named:

`media/schools/<slug>/hero.jpg`

Example: `media/schools/bryant-woods/hero.jpg`

A wide outdoor or building photo works best. Until that file is added, the teal placeholder remains.
