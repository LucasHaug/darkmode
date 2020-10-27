# darkmode
This extension allows to switch to Light /Dark mode.
It's invert color with CSS.

Modified by Lucas Haug.

The colors for darkmode were generate using the `colors.scss` and this [site](https://www.cssportal.com/scss-to-css/) (`sass` can be used as well). `The generate colors were changed a little, so the `darkmode.css` does not correspond to the `colors.scss` entirely. The `colors.scss` file was extracted from a filed called `colors.css.php` that was part of the forum theme.

This extension must be cloned inside the `ext/` and inside of a directory that must be called `thunderatz`, so the path to the extension will be `$FORUM_HOME/ext/thunderatz/darkmode`.

Known problems:
- ACP has no dark mode.
