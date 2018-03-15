# React + Semantic UI: SPA Boilerplate

This Boilerplate is a modified version of the [webpack3 example](https://github.com/Semantic-Org/Semantic-UI-React/tree/master/examples/webpack3)
from the [Semantic-UI- React](https://github.com/Semantic-Org/Semantic-UI-React/)
repository hosted right here on [Github](https://github.com).

## Why?
I really liked the original example because of how well it integrates Webpack3
and Yarn together to make adding packages a breeze (just `yarn add package-name`
and Bob's your uncle).  I also changed all the files that use JSX from `.js` to `.jsx`
because some text-editors have trouble with the JSX syntax unless it is pre-
emptively declared this way.  IMO, this is the better way to do it anyway
(and it definitely helps with my infernal emacs setup :P).

Also, we wrap the react-router v4 library around our application using
`<BrowserRouter>` so that we can route our components to a single page. It
really is quite brilliant if you have ever wanted to create a simple SPA without
having to set-up something on the
backend. Our `build` code should work just fine in a static setup without having
to hand-code or generate individual pages, so noice!

One last thing, we use `Main.jsx` rather than `App.jsx` because I'm an old guy
I think this whole App thing is just a fad. Feel free to change it back if you
like. It is open source, right?

Just create your components in the `src/components` directory and then import
them in to main for rendering. We use the generic `Home.jsx`, `Work.jsx`,
`Company.jsx`, and `Careers.jsx` but you can make them whatever you want.

### Installation

After cloning, cd into the directory and run `yarn install` to download and
install all the necessary dependencies.

Running `yarn start` starts up your hotloading webpack-dev-server on
`localhost:3000`.

When you're ready for deployment then run `yarn build` and your `build` folder
is ready for action. If you build something cool with this, let me know!

## TODO

I would really love to figure out how to get this bad boy working with gh-pages,
there is an example over [here](https://github.com/rafrex/spa-github-pages) that I
tried to implement but couldn't quite get it to work.  If we could figure it out
it could be quite promising though because I find Jekyll just too obtuse.
