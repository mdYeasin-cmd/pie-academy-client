import React from 'react';

const Blog = () => {

    return (
        <div className="container my-5">
            {/* Question - 1 */}
            <h2 className="fs-4 bg-success text-white px-4 py-2 rounded">What is CORS?</h2>
            <h3 className="ms-4 mb-3 fs-4">
                "CORS" stands for Cross-Origin Resource Shariing. It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).
            </h3>

            {/* Question - 2 */}
            <h2 className="fs-4 bg-success text-white px-4 py-2 rounded">Why are you using firebase? What other options do you have to implement authentication?</h2>
            <h3 className="ms-4 mb-3 fs-4">
                Firebase is used to implement an authentication system in a website. On websites there are various types of information, some information is sensitive and every user cannot get access them. To verify a user how much authorization power in a website firebase is used. <br /> <br />

                There are many option to implement authentication system. Some options are mention below - <br />

                <span className="ms-5 d-block">
                    1. Keycloak <br />
                    2. STYTCH <br />
                    3. Supabase <br />
                    4. Okta <br />
                    5. Auth0
                </span>
            </h3>

            {/* Question - 3 */}
            <h2 className="fs-4 bg-success text-white px-4 py-2 rounded">How does the private route work?</h2>
            <h3 className="ms-4 mb-3 fs-4">
                The private route works depending on the user's state. If the user is logged in the private route will be worked nor navigate the log-in page.
                <br /><br />
                Private Routes in React Router also called Protected Routes. Where require a user being authorized to visit a page. So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized which means in this case being authenticated. Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
            </h3>

            {/* Question - 4 */}
            <h2 className="fs-4 bg-success text-white px-4 py-2 rounded">What is Node.js? How does Node work?</h2>
            <h3 className="ms-4 mb-3 fs-4">
                Node.js is an open-source JavaScript runtime environment. <br /><br />

                Node.js used as backend service where JavaScript works on the server-side of the application. This way JavaScript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts JavaScript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br /><br />

                Node.js working process is mention below - <br />
                Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.<br /><br />

                Node.js mainly works on two concept - <br />

                <span className="ms-5 d-block">
                    1. Non-blocking I/O <br />
                    2. Asynchronous <br />
                </span>
            </h3>
        </div>
    );
};

export default Blog;