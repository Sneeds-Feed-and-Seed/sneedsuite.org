# Sneedacity webpage

Webpage for the Sneedacity and SIMP projects

## Main projects

[GitHub account](https://github.com/Sneeds-Feed-and-Seed)

[Sneedacity](https://github.com/Sneeds-Feed-and-Seed/sneedacity)

[Simp](https://github.com/Sneeds-Feed-and-Seed/SIMP)

### To-do

* Get a logo for the project as a whole; not just Sneedacity
* Get a name for the project as a whole, e.g. "Sneed Suite" or "The Sneed Suite Project"
* Get list of supported operating systems for Sneedacity and SIMP
* Get download links for Sneedacity and SIMP for the various operating systems
* Get a list of other software/projects currently being developed for the Sneed Suite
* Make sure the CSS supports mobile devices
  * Check for issues on mobile devices; can use Chrome's built-in devtool feature for this
  * The `font-size` property of the header `<h1>` text needs to be placed inside a `min` function alongside a length in `vw` units
  * `<nav>` element doesn't change width when the window is resized; this is because the custom JavaScript used to get the page dimensions excluding the scrollbars doesn't update the CSS variables (`--client-width` and `--client-height`) storing that information when the window is resized
