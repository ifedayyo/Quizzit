import { useEffect, useState } from "react";

export default function Quizzes() {
  const [quizData, setQuizData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://the-trivia-api.com/v2/questions`);
        if (!response.ok) {
          throw new Error(`Couldn't fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        setQuizData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p> Error: {error.message}</p>
      ) : (
        <div>
          {quizData.map((question) => (
            <div key={question.id}></div>
          ))}
        </div>
      )}
    </div>
  );
}

{
  /*
   *How does async/await work?
   *tag your function as async e.g. async function Ifedayo(){}
   *await things inside the async function. see below:
   async function Ifedayo(){
        await eat(30000);
        const response = await eat(2000);
        console.log(response);
   }
        you can set the function equal to a variable...

        NOTE: The await keyword must only be used
        inside an asynchronous function or module

        NOTEE: In the async/await version, the result
        of the promise is directly assigned to a variable
        e.g. const response = await fetch()
        const json = await response.json();
        In the standard promise version, the result of the 
        promise is passed as an argument to the
        .then() method

   */
}
