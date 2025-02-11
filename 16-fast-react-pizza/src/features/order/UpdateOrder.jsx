import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

UpdateOrder.propTypes = {
  order: PropTypes.object.isRequired,
};
