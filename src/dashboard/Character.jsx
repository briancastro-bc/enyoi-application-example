const Character = (props) => {
  const { character, } = props;
  const {
    id,
    name,
    status,
    gender,
    createdAt,
    origin,
    image,
  } = character;

  return (
    <article className="w-full min-h-[180px] flex bg-gray-100 border border-gray-950 shadow-sm rounded-md px-4 py-3 items-center gap-x-4">
      <img src={image} alt={name} className='rounded-full w-[150px] h-[150px] object-contain'/>
      <div className="flex flex-col">
        <h3>{name}</h3>
        <p>{status}</p>
        <span>{origin?.name}</span>
      </div>
    </article>
  );
};

export default Character;