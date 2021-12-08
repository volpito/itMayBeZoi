import { Link } from 'react-router-dom';

export default function CTA1() {
  return (
    <div className="bg-green-50 py-5">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-yellow-400">Vous êtes lyonnais ?</span>
          <span className="block text-gray-600">Ou simplement de passage...</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="ml-auto inline-flex rounded-sm shadow">
            <Link
              to="/access"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-xl font-medium rounded-sm text-gray-600 bg-white transform hover:rotate-180"
            >
              Venez nous voir !
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
