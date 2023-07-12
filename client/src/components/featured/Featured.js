import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sousse_Ribat_Aussicht.JPG/420px-Sousse_Ribat_Aussicht.JPG"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Sousse</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Yasmine_Hammamet_2022_%283%29.jpg/330px-Yasmine_Hammamet_2022_%283%29.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hammamet</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Djerba_Er_Riadh_Street_Art_11.JPG/405px-Djerba_Er_Riadh_Street_Art_11.JPG"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Dejrba</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;