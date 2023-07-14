const updateData = (status, count, setStatus, setCount) => {
  if (!status) {
    const newCount = count + 1;
    const newStatus = !status;
    setStatus(newStatus);
    setCount(newCount);
    return { count: newCount, userStatus: newStatus };
  } else {
    const newCount = count - 1;
    const newStatus = !status;
    setStatus(newStatus);
    setCount(newCount);
    return { count: newCount, userStatus: newStatus };
  }
};
export default updateData;
