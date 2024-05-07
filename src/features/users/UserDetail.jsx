import styled from "styled-components";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import empty from "../../assets/empty_cart.png"
import { useUserDetails } from "./useUserDetail";
import { useState } from "react";
import Spinner from "../../ui/Spinner";
import ProfileAvatar from "../../ui/ProfileAvatar";
import dayjs from "dayjs";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function UserDetail({ id }) {
  const { user, isLoading } = useUserDetails(id);
  const [active, setActive] = useState(1);
  const name = user?.data?.name?.split(" ");
  const fname = name && name[0];
  const lname = name?.length > 1 ? name[1] : "";
  if (isLoading) return <Spinner />;
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h2" onClick={() => setActive(1)}>
            <p className={`cursor-pointer ${active === 1 && "font-semibold"}`}>
              User Details
            </p>
          </Heading>
          <Heading as="h2" onClick={() => setActive(2)}>
            <p className={`cursor-pointer ${active === 2 && "font-semibold"}`}>
              User Orders
            </p>
          </Heading>
        </HeadingGroup>
      </Row>
      <div className="mt-6 md:w-[400px] xl:w-[600px] min-h-[300px]">
        {active === 1 && (
          <div className="">
            <div className="flex gap-x-2 items-center">
              <div className="">
                <ProfileAvatar
                  url={""}
                  fname={fname}
                  lname={lname}
                  size={65}
                  font={21}
                />
              </div>
              <div>
                <p className="font-semibold capitalize">{user?.data?.name}</p>
                <div>
                  {user?.data?.suspended === "0" ? (
                    <div className="flex items-center text-green-600 gap-x-1">
                      <span className="w-4 h-4 rounded-full bg-green-600"></span>
                      <span>Active</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-orange-600 gap-x-1">
                      <span className="w-4 h-4 rounded-full bg-orange-600"></span>
                      <span>Inactive</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-5 grid gap-4">
              <div>
                <p>Email: {user?.data?.email}</p>
              </div>
              <div>
                <p>Phone: {user?.data?.phone_number}</p>
              </div>
              <div>
                <p>
                  Joined At:{" "}
                  {dayjs(user?.data?.created_at).format("DD/MM/YYYY")}
                </p>
              </div>
              <div>
                <p>User Type: Customer</p>
              </div>
              <div>
                <p>Address: {user?.data?.residence_address}</p>
              </div>
            </div>
          </div>
        )}
        {active === 2 && (
          <div>
            {!user.data.orders.length && (
              <div className="py-12 text-center">
                <img src={empty} alt="empty" className="w-6/12 mx-auto" />
                <p className="mt-4">No Orders Yet</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default UserDetail;
