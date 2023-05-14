import { Container, Table } from "reactstrap";
import { BsStopwatch } from "react-icons/bs";
import TableSongCard from "../Card/TableSongCard";

const SongsTable = ({ songsList, type = "playlist" }) => {
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
                  marginRight: "2rem",
                }}
              >
                <BsStopwatch size={22} />
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
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SongsTable;
