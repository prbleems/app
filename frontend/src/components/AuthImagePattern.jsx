const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        {/* Imagen */}
        <div className="mb-8">
          <img 
            src="https://i.imgur.com/sq1k0Um.jpg"
            alt="Imagen de fondo de autenticación"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </div>
        {/* Título y subtítulo */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
