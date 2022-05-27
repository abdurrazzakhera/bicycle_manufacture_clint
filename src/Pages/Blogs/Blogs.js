import React from "react";

const Blogs = () => {
  return (
    <div className='md:container mx-auto'>
      <h1 className='lg:text-5xl text-4xl text-primary text-center mb-8'>
        Blogs / Article
      </h1>
      <div className='my-8'>
        <h1 className='text-3xl mb-4 font-semibold'>
          Q:How will you improve the performance of a React Application?
        </h1>
        <div className='text-lg'>
          <p>
            React is a Most Popular JavaScript library for building user
            interfaces. five way improve react perfermance
          </p>
          <ul>
            <li>
              1. Use React.Fragment to avoid adding extra nodes to the dom.
            </li>
            <li>2. Remove all inline Function</li>
            <li>3. Avoid modifying the state if there is no change </li>
            <li>4. Use React.memo for Component Memoization</li>
            <li>5. Virtyalizw a large list using react window</li>
          </ul>
        </div>
      </div>
      <div className='my-8'>
        <h1 className='text-3xl mb-4 font-semibold'>
          Q:How does prototypical inheritance work?
        </h1>
        <div className='text-lg w-8/12'>
          <p>
            Every object with its methods and properties contains an internal
            and hidden property known as "Prototypy". The Prototypal Inheritance
            is a feature in javaScript used to add methods and properties in
            objects. it is a method by which an object can ingerit the
            properties and methods of another object .Traditiionally, in order
            to get and set the "prototype" of an object , we use
            Object.getPrototypeOf and Object.setPrototypeOf. NowaDays, in modern
            langyage it is being set using _"proto" Syntax:
            childObject._proto_=ParntObject
          </p>
        </div>
      </div>
      <div className='my-8'>
        <h1 className='text-3xl mb-4 font-semibold'>
          Q:What is a unit test?why should write unit tests?
        </h1>
        <div className='text-lg w-8/12'>
          <p>
            Unit test is a type of software/application testing when small units
            or comoponents of software/application are tested. The purpose is to
            validate that each unit of the software/apllication code small pech
            working as expected. some importent cause of unit testrmance
          </p>
          <ul>
            <li>1. Developers try saving time during project.</li>
            <li>2. easy bug fixed by unit testing.</li>
            <li>3. It also save money at end. </li>
            <li>4. it a first/entry level testing a software</li>
          </ul>
        </div>
      </div>
      <div className='my-8'>
        <h1 className='text-3xl mb-4 font-semibold'>
          Q:How will you improve the performance of a React Application?
        </h1>
        <div className='text-lg'>
          <p>
            React is a Most Popular JavaScript library for building user
            interfaces. five way improve react perfermance
          </p>
          <ul>
            <li>
              1. Use React.Fragment to avoid adding extra nodes to the dom.
            </li>
            <li>2. Remove all inline Function</li>
            <li>3. Avoid modifying the state if there is no change </li>
            <li>4. Use React.memo for Component Memoization</li>
            <li>5. Virtyalizw a large list using react window</li>
          </ul>
        </div>
      </div>
      <div className='my-8'>
        <h1 className='text-3xl mb-4 font-semibold'>
          Q:How will you improve the performance of a React Application?
        </h1>
        <div className='text-lg'>
          <p>
            React is a Most Popular JavaScript library for building user
            interfaces. five way improve react perfermance
          </p>
          <ul>
            <li>
              1. Use React.Fragment to avoid adding extra nodes to the dom.
            </li>
            <li>2. Remove all inline Function</li>
            <li>3. Avoid modifying the state if there is no change </li>
            <li>4. Use React.memo for Component Memoization</li>
            <li>5. Virtyalizw a large list using react window</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
