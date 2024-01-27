export default function Navbar() {
    return(
        <nav className="bg-gradient-to-r from-pink-500 to-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Icône pour les options à gauche */}
        <div className="text-white">
          {/* Remplacez l'icône ci-dessous par l'icône que vous souhaitez utiliser */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        {/* Nom de l'application au centre avec une police plus grande et stylée */}
        <div className="text-white text-3xl font-extrabold tracking-wide">
          BABYEARN
        </div>

        {/* Icône en forme de point d'interrogation à droite */}
        <div className="text-white">
          {/* Remplacez l'icône ci-dessous par l'icône que vous souhaitez utiliser */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l-1 2h2l-1-2zm0-7V7m0-4a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </div>
    </nav>
    )
}