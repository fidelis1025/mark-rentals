import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCommentsSections } from "../redux/comments/comments.selector";

import { RxDotFilled } from "react-icons/rx";

import video1 from "../../videos/Real-Estate.webm";

const CommentSection = ({ comments }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex(
      (currentCardIndex) => (currentCardIndex + 1) % comments.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextCard, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const goToComments = (commentIndex) => {
    setCurrentCardIndex(commentIndex);
  };

   
  return (
    <div className="md:font-Inter md:h-34rem md:flex md:space-x-0">
      <section className="md:pt-24 md:pl-24 md:pr-8 md:w-[50rem] md:bg-[#f4511e12]">
        <div>
          <p className="md:text-justify md:leading-8 md:font-normal md:text-xl md:text-[#18191F] transition delay-150 duration-300 ease-in-out">
            {comments[currentCardIndex].note}
          </p>
          <div className="md:flex md:space-x-4 md:mt-8">
            <img
              className="md:w-14 md:h-14 md:rounded-full md:ring-2 md:ring-[#F4511E] md:object-cover transition delay-150 duration-300 ease-in-out"
              src={comments[currentCardIndex].thumbnail}
              alt="Staff pictures"
            />
            <div className="md:flex md:flex-col md:space-y-0">
              <h6 className="md:font-semibold md:text-lg md:text-[#F4511E] transition delay-150 duration-300 ease-in-out">
                {comments[currentCardIndex].name}
              </h6>
              <p className="md:font-normal md:text-base md:text-[#18191F] transition delay-150 duration-300 ease-in-out">
                {comments[currentCardIndex].post}
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-center md:py-6">
          {comments.map((comment, commentIndex) => (
            <div
              key={commentIndex}
              onClick={() => goToComments(commentIndex)}
              className="md:bottom-8 md:text-[#F4511E] md:text-3xl cursor-pointer md:w-min-20 md:h-min-12"
            >
              <RxDotFilled />
              {/* try and change this to an input field with radio button and see if it would give me the selection on active feature */}
            </div>
          ))}
        </div>
      </section>

      <section className="md:w-[50rem]">
        <video
          className="md:w-full md:h-full"
          src={video1}
          autoPlay
          controls
          loop
        />
      </section>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  comments: selectCommentsSections,
});

export default connect(mapStateToProps)(CommentSection);
