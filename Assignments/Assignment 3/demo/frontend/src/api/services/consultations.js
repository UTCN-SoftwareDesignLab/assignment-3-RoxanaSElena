import authHeader, { BASE_URL, HTTP } from "../http";

export default {
  allConsultations() {
    return HTTP.get(BASE_URL + "/consultation", { headers: authHeader() }).then(
      (response) => {
        return response.data;
      }
    );
  },
  create(consultation) {
    return HTTP.post(BASE_URL + "/consultation", consultation, {
      headers: authHeader(),
    }).then((response) => {
      console.log(response.data);
      return response.data;
    });
  },
  delete(id) {
    return HTTP.delete(BASE_URL + "/consultation/" + id, {
      headers: authHeader(),
    }).then((response) => {
      return response.data;
    });
  },
  edit(consultation) {
    return HTTP.put(
      BASE_URL + "/consultation/" + consultation.id,
      consultation,
      {
        headers: authHeader(),
      }
    ).then((response) => {
      return response.data;
    });
  },
};
