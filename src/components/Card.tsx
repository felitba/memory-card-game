type CardProps = {
  receivedGif: Gif;
  handleClick: ()=> void;
};

type Gif = {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
};

function Card({ receivedGif,handleClick }: CardProps) {

    return(
        <div className="card">
            <img src={receivedGif.images.fixed_height.url} alt={receivedGif.title} onClick={handleClick} />
        </div>
    );
}

export default Card