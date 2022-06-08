import LocksArr from "./LocksArr";
import { RiLock2Fill, RiLockUnlockFill } from "react-icons/ri";
const Locks = (propsLock) => {
  return (
    <>
      <section className="profile_locks row mt-3 align-items-center">
        {LocksArr.map((val) => {
          return (
            <div className={propsLock.cols} key={val.id}>
              <div>
                <ul>
                  <li>
                    {val.lockType === "locked" ? (
                      <RiLock2Fill />
                    ) : (
                      <RiLockUnlockFill />
                    )}
                  </li>
                  <li>
                    <h2>{val.pData}</h2>
                  </li>
                  <li>
                    <p>{val.pzaData}</p>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Locks;
