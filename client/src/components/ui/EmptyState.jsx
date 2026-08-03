const EmptyState = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>

      <p className="mt-2 text-gray-500 max-w-sm">{description}</p>
    </div>
  );
};

export default EmptyState;
