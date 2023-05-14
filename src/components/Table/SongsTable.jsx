import { Container, Table } from "reactstrap";
import { BsStopwatch } from "react-icons/bs";
import { TableSongCard } from "../Card";
import { currentSelectedSongAtom } from "../../recoilState";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

const SongsTable = ({ songsList, type = "playlist" }) => {
  const [currentSelectedSong, setCurrentSelectedSong] = useRecoilState(
    currentSelectedSongAtom
  );

  useEffect(() => {
    setCurrentSelectedSong(null);
  }, [songsList]);

  return (
    <Container fluid className="p-4 m-0">
      <Table responsive={true} borderless={true}>
        <thead>
          <tr
            className="border-secondary"
            style={{
              color: "#797B7C",
              borderBottom: "solid 1px #393C3E",
            }}
          >
            <th>
              <div
                style={{
                  marginLeft: "0.8rem",
                }}
              >
                #
              </div>
            </th>
            <th>Title</th>
            {type === "playlist" ? (
              <>
                <th>Album</th>
                <th>Date Added</th>
              </>
            ) : null}
            <th
              style={{
                textAlign: "right",
              }}
            >
              <div
                style={{
                  marginRight: "4rem",
                }}
              >
                <BsStopwatch size={20} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {songsList.map((songid, index) => (
            <TableSongCard
              key={songid}
              songid={songid}
              index={index + 1}
              type={type}
              currentSelectedSong={currentSelectedSong}
              setCurrentSelectedSong={setCurrentSelectedSong}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SongsTable;
