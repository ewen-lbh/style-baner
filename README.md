# style-baner
30-line js script to ban a certain styles on your web browser.

## Prerequisites
Requires a User JS extension, here's a good one for [Chrome](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld) and for [Firefox](https://addons.mozilla.org/fr/firefox/addon/custom-style-script).

## Usage
This file contains a `ban_style` function that takes two variables: the name of the css property (in camelCase), and a querySelector string (defaults to `*`).

By default, the script makes a call and blocks the `textShadow` attribute on font, h1, h2, h3, h4, h5, p and li elements.
You can make your own call, or delete this one, obviously.

## Notifying style bans
When a style is removed (or rather set to `none`), an `alert` dialog pops up, warning you about how many elements have been changed. It also appends a warning at the end of the `title` attribute (or creates it if the element doesn't have one).

## Multiple style bans
Since each call to the function generates an alert popup, you can disable them by setting the second function argument to `false`.
ATM,the function doesn't have any way to concatenate multiple ban alerts, I'll add that later.

## Contributing 
Feel free to request anything, this is a very small one-file project, and any improvement is welcome, tho It should stay a simple script that you can copy paste in a user JS extension.

## Making it an extension ?
Thinking about that. But I need to learn Chrome/Firefox extension creation, and I don't have time for that.
