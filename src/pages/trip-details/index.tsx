import { useParams } from "react-router";

export default function TripsDetail() {
  const { tripId } = useParams();
  return <div>TripsDetail {tripId}</div>;
}
