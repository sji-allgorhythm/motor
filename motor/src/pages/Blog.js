import React from 'react'

export const Blog = () => {
  return (
    <>




      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">React</span>
                <span class="mt-1 text-gray-500 text-sm">11 Nov 2022</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">What are the different ways to manage a state in a React application?</h2>
                <p class="leading-relaxed">
                  There are four main types of state you need to properly manage in your React apps:
                  <ul>
                    <li>Local state</li>
                    <li>Global state</li>
                    <li>Server state</li>
                    <li>URL state</li>
                  </ul>

                  <strong>Local (UI) state –</strong> <br />
                  Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                  <br /><strong>Global (UI) state – </strong> <br />Global state is data we manage across multiple components.
                  Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                  A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                  Sometimes state we think should be local might become global.
                  <br /><strong>Server state – </strong> <br /> Data that comes from an external server that must be integrated with our UI state.
                  Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                  There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                  Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                  <br /><strong>URL state –</strong><br /> Data that exists on our URLs, including the pathname and query parameters.
                  URL state is often missing as a category of state, but it is an important one.
                  In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                  There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                </p>
              </div>
            </div>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">JavaScript</span>
                <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">How does prototypical inheritance work?</h2>
                <p class="leading-relaxed">
                  The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </p>
              </div>
            </div>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">Common</span>
                <span class="text-sm text-gray-500">12 Jun 2012</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">What is a unit test? Why should we write unit tests?</h2>
                <p class="leading-relaxed">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">Common</span>
                <span class="text-sm text-gray-500">12 Jun 2019</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">React vs. Angular vs. Vue?</h2>
                <p class="leading-relaxed">
                  <strong>Angular –</strong> <br />
                  Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                  <br /><strong>Vue –</strong> <br />
                  Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.
                  Further reading: Vue.js Tutorial for Beginner Developers
                </p>
                <br /><strong>React –</strong> <br />
                React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.
                <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
