// Higher-Order Components (HOC) are a design pattern in React that enables code reuse and behavior sharing between
// components. A Higher-Order Component is a function that takes a component as input and returns a new component
// with additional or modified functionality.

// The basic idea behind HOCs is to wrap a component with another component to extend its capabilities.
// This allows you to abstract away common logic and features, making it easier to maintain and reuse across different
// parts of your application.

// Here's a simplified example of a Higher-Order Component:

// Higher-Order Component (HOC) function
const withLogger = (WrappedComponent) => {
  class WithLogger extends React.Component {
    componentDidMount() {
      console.log("Component is mounted!");
    }

    componentWillUnmount() {
      console.log("Component is unmounted!");
    }

    render() {
      // Pass props down to the wrapped component
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLogger;
};

// Regular component
const MyComponent = (props) => {
  return <div>Hello, {props.name}!</div>;
};

// Wrapping the regular component with the HOC
const MyComponentWithLogger = withLogger(MyComponent);

// Usage of the wrapped component
ReactDOM.render(
  <MyComponentWithLogger name="John" />,
  document.getElementById("root")
);

// In this example, withLogger is a Higher-Order Component that takes a component (WrappedComponent) as an argument
// and returns a new component (WithLogger). The returned component (WithLogger) adds logging functionality to the
// original component.

// When MyComponentWithLogger is used, it will render the WithLogger component, which wraps the MyComponent. As a
// result, whenever MyComponentWithLogger is mounted or unmounted, it will log messages to the console, showing that
// the component has been mounted or unmounted.

// This is just a simple example, and HOCs can be used for a wide range of functionalities, such as adding
// authentication, data fetching, or any other common behavior that needs to be shared across multiple components.
// HOCs help keep the codebase modular and promote reusability in React applications. However, with the introduction of
// React Hooks and the Context API, some use cases of HOCs can now be achieved more elegantly using these newer features.
