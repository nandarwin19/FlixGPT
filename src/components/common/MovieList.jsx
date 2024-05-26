import MovieCard from "./MovieCard";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MovieList = ({ title, movieLists }) => {
  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl md:text-3xl py-6 font-bold underline">{title}</h1>
      <div className="">
        {!movieLists ? (
          <p>shimmer</p>
        ) : (
          <div className="flex">
            <Swiper
              spaceBetween={10}
              breakpoints={breakpoints}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {movieLists?.map((movie) => (
                <SwiperSlide key={movie?.id}>
                  <MovieCard
                    data={{ ...movie }}
                    id={movie?.id}
                    posterPath={movie?.poster_path}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string,
  movieLists: PropTypes.array,
};

export default MovieList;
