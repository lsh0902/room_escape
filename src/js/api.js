const API_END_POINT =
  "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = (nodeId) => {
  try{
  const res = await fetch(`${API_END_POINT}/${nodeId || ""} `)
  if (!res.ok) {
    throw new Error("서버의 상태 안좋음");
  }
    return await res.json();
  } catch(e) {
      throw new Error("뭔가 잘못됨");
  };
};
