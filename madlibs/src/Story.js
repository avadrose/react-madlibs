function Story({ data, restart }) {
  return (
    <div>
      <p>
        There was a {data.color} {data.noun} who loved a{" "}
        {data.adjective} {data.noun2}.
      </p>

      <button onClick={restart}>
        Restart
      </button>
    </div>
  );
}

export default Story;