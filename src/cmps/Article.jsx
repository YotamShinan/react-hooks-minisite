import React, { Component } from "react";

export default class Article extends Component {
  render() {
    const p1 = `It’s been almost 2 years since we’ve been introduced to React Hooks,
      and yet it seems that many developers are still holding on to the old
      state management methods of class components and their lifecycles.
      Now, there’s nothing wrong about keeping old habits which we feel
      comfortable with (as long as they’re not bad ones), but it’s always a
      good practice to pick up new skills - especially when they can make
      our work much easier.`;

    const p2 = `Whether you are an avid React developer, or just started using it
      lately, you know how class components work: every component holds a
      mutable state object with keys and values which refer individually to
      elements in the component, and determine their specific state. React
      Hooks (or just “Hooks”) allow you to build your entire React app with
      functional components only. Yes, that’s right, no more classes. State
      management, lifecycle methods & side effects, and many other things
      can now all be implemented in functional components - with the help of
      these Hooks.`;

    const p3 = `This doesn’t mean that classes belong in the past - in some cases
      their functionality is still useful, and either way, class components
      and functional components can be implemented side by side in the same
      project.`;

    const p4 = `With that being said, let’s dive in and see how Hooks look like, and
      how they are used`;

    const p5 = `This is how we managed state before Hooks:`;

    const p6 = `And this is how we do the same thing, but with Hooks:`;

    const p7 = `This may seem a bit confusing at first, but let me tell you - once you
      get how Hooks work, managing your state becomes a breeze.`;

    const p8 = `Let’s start with useState(). This is a so-called Hook used to manage
      state in a functional component. In order to use it (and all other
      types of Hooks, but we’ll talk about it in another article), we first
      need to import { useState } from ‘react’, instead of { Component }.`;

    const li1 = `1. We pass in an initial state (e.g ‘false’)`;
    const li2 = `2. It returns an array of exactly 2 elements ( [darkMode, setDarkMode]  => our current state and a state-setting function)`;
    const li3 = `3. When we need to change the state, we address the first element and set it with the second element - which is a function.`;
    
    const p10 = `As you might have noticed, we had 2 properties in the state object of the class component example, that are now divided into separated constants with Hooks in the functional component example. The meaning of this is that no longer do we need to access our state using setState, prevState, this.state.element, and so forth. Instead, we just call the specific state property we wish to change, along with it’s “private” setter function, and let React Hooks protocol do the rest. `;

    const p11 = `This is just a fraction of Hooks’ capabilities. Another Hook, useEffect(), is used for handling side-effects that should be executed in the render cycle (http requests, for example) and essentially it replaces the old componentDidMount method. In the next article we will dive deeper into this matter, but for now I recommend to follow the instructions in the attached video above, and then go ahead and try implementing Hooks in one of your projects. Remember, there’s no need to refactor a whole project. You can start by changing just one class component into a functional component with React Hooks, and see how it feels :)`;

    const p12 = `That’s it for now. For more handy videos and articles - check out my blog at `
    

    return (
      <div className="article">
        <p className="p1">{p1}</p>
        <h3 className="h3-1">So what ARE Hooks?</h3>
        <p className="p2">{p2}</p>
        <p className="p3">{p3}</p>
        <p className="p4">{p4}</p>
        <p className="p5">{p5}</p>
        <div className="img1" />
        <p className="p6">{p6}</p>
        <div className="img2" />
        <p className="p7">{p7}</p>
        <p className="p8">{p8}</p>
        <h3 className="h3-2">And this is how it works:</h3>
        <ul className="ul9">
        <li className="li1">{li1}</li>
        <li className="li2">{li2}</li>
        <li className="li3">{li3}</li>
        </ul>
        <p className="p10">{p10}</p>
        <p className="p11">{p11}</p>
        <p className="p12">{p12}<a href="https://blog.codota.com/" target="_blank">Codota</a></p>
        <h3 className="h3-3">See you next time!</h3>
      </div>
    );
  }
}
