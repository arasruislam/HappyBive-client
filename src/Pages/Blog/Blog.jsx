const Blog = () => {
  return (
    <div className="custom-container py-4 space-y-4">
      <div>
        <h1 className="font-bold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p>
          A refresh token help to re-validation a user and the access token are
          used in token based authentication to allow to access the api data.
          the token we can store on browser cookie storage and the alternative
          way is to store on local storage.
        </p>
      </div>
      <div>
        <h1 className="font-bold">Compare SQL and NoSQL databases?</h1>
        <p>
          SQL database are vertically scalable where NoSQL database are
          horizontally scalable. SQL database are well structured but NoSQL does
          not have any structure. SQL database follow on relation data model
          where NoSQL database follow on Document Data Model.
        </p>
      </div>
      <div>
        <h1 className="font-bold">
          What is express js? What is Nest JS (google it)?
        </h1>
        <p>
          ExpressJs is a minimal and fixable nodeJs framework. Nest Js is one of
          the fastest growing nodejs framework for building enterprise backend
          application.
        </p>
      </div>
      <div>
        <h1 className="font-bold">
          What is MongoDB aggregate and how does it work (google it)?
        </h1>
        <p>
          MongoDB aggregate is a way of processing a large number of documents
          in a collection by means of passing them through.
        </p>
      </div>
    </div>
  );
};

export default Blog;
