import axios from "axios";
import config from "../../config";
export async function getStores() {
  try {
    const response = await axios.get(
      "https://api-extern.systembolaget.se/site/V2/Store?",
      {
        headers: {
          "Ocp-Apim-Subscription-Key": config.REACT_APP_ENV_SYS,
        },
      }
    );
    return JSON.stringify(response.data);
  } catch (error) {
    console.log(error.message);
  }
}
export async function getStore(siteId) {
  try {
    const response = await axios.get(
      "https://api-extern.systembolaget.se/site/V2/Store/" + siteId,
      {
        headers: {
          "Ocp-Apim-Subscription-Key": config.REACT_APP_ENV_SYS,
        },
      }
    );
    return JSON.stringify(response.data);
  } catch (error) {
    console.log(error.response);
  }
}
