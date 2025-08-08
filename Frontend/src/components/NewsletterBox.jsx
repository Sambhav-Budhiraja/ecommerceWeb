import React from 'react';

const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-gray-50 py-16 px-4 text-center">
      <p className="text-2xl sm:text-3xl font-semibold text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
        Get exclusive access to our latest collections, deals, and updates directly to your inbox.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-2/3 md:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto mt-6"
      >
        <input
          className="w-full p-3 border border-gray-300 rounded-md outline-none text-sm"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 text-sm rounded-md hover:bg-gray-900 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterBox;
