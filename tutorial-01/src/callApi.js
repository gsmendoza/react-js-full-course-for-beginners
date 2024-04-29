const callApi = async (url, options) => {
  let errorMessage = null;

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw Error("Please reload the app.");
    }
  }
  catch (error) {
    errorMessage = error.message;
  }
  finally {
    return errorMessage;    
  }
}

export default callApi;
