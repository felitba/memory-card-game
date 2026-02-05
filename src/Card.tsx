

type CardProps = {
  receivedGif: Gif;
};

type Gif = {
  id: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
};

function Card({ receivedGif }: CardProps) {

    return(
        <>
            <img src={receivedGif.images.fixed_height.url} alt="gif" />
        </>
    );
}

export default Card