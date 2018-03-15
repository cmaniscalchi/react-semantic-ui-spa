# React + Semantic UI: SPA Boilerplate

This Boilerplate is a modified version of the [webpack3 example]
(https://github.com/Semantic-Org/Semantic-UI-React/tree/master/examples/webpack3)
from the [Semantic-UI- React](https://github.com/Semantic-Org/Semantic-UI-React/)
repository on Github.

## Why?
I really liked the original example  because of how well it integrates Webpack3
and Yarn together to make adding packages a breeze.  I also changed all the
files that use JSX from .js to .jsx because sometimes text-editors have trouble
with the JSX syntax unless it is declared this way.  IMO, this is the better way
to do it (and my it helps with my infernal emacs setup).

Also, we wrap the react-router v4 library around our app so that we can route
our components to a single page. It really is quite brilliant if you have ever
wanted to create a simple SPA without having to set-up something on the backend.
Our `build` code should work just fine in a static setup without having to
hand-code or generate individual pages, noice!

After cloning, cd into the directory and run `yarn install` to download and
install all the necessary dependencies.
