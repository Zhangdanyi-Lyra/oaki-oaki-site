# Story image design QA

- Reference: supplied screenshot showing the larger cracked egg and Oaki behind the “From the folded deep-sea world” title.
- Implemented: replaced the image with `91f88fda8cc2806ab419a5be4cb6b8e3 1.png`, centered it behind the title at the reference scale, and retained its appearance with the first typed character.
- Checked in the local browser at 1280 × 720: image loads, full title remains legible, and the four story columns begin below the egg artwork. See [story-image-qa.jpg](story-image-qa.jpg).
- JavaScript syntax check: passed (`node --check`).
- Responsive sizing: image width is bounded by viewport width and height; a separate narrow-screen rule scales it for mobile. Mobile visual QA remains unverified because this browser session does not expose a viewport override.
