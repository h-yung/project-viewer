# project-viewer

A simple gallery for full-screen viewing of panoramic(?) photos, photos not included. 
- Password protection via **pagecrypt** can be configured from the package script.
- Gallery "model"/schema/interface provided. In general, even if your images are not in a consistent ratio, you can experiment with customizing the ratio and number of slides to best serve your needs (thus it's not hardcoded as part of the Viewer mapping).

_Example single-view (cropped a little tight at the top)_
![project_viewer](https://user-images.githubusercontent.com/102257735/216846785-a0a3832a-19ae-44c9-aa7f-16082edc30fe.png)

Thematically similar to windowswap but more recent inspo from Liberty London's /special-content experience.

### Optimizations
- Would like to make slide nav more keyboard friendly.
- Overlays with some interactive parallax effects. Will never be a maximalist app but a nice testing ground.
- More click throughs to new places, which may eventually require React Router.

### Dev notes
- Typescript + React + Ant Design + pagecrypt
-   Original creds: [Password protection for static sites](https://medium.com/@j0hnm4r5/password-protecting-a-website-with-the-free-tier-of-netlify-and-publishing-with-a-single-npm-e509af9f108f). For some reason, Staticrypt wasn't working for me. Pagecrypt was a breeze though and could be very useful for short demos.

Why...
-   Is it not getting images from some database instead?
    -   More flexible hosting options for static websites. Someday might change.
