type CardProps = {
  receivedGif: Gif;
  handleClick: ()=> void;
};

type Gif = {
  id: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
};

function Card({ receivedGif,handleClick }: CardProps) {

    return(
        <div className="card">
            <img src={receivedGif.images.fixed_height.url} alt="gif" onClick={handleClick} />
        </div>
    );
}

export default Card