export default function WebTable() {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#255036] text-white">
            <tr>
              <th
                scope="col"
                className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Included
              </th>
              <th
                scope="col"
                className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Basic
              </th>
              <th
                scope="col"
                className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Premium
              </th>
              <th
                scope="col"
                className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Pro
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">Hosting</div>
                <div className="text-sm text-gray-500">
                  Super-fast UK website hosting
                </div>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">SSL</div>
                <div className="text-sm text-gray-500">
                  Give your website the green padlock
                </div>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  Daily backups
                </div>
                <div className="text-sm text-gray-500">
                  Your website is backed up every day
                </div>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  Up to 2 backups stored
                </div>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  Up to 3 backups stored
                </div>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  Up to 5 backups stored
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  PHP updates
                </div>
                <div className="text-sm text-gray-500">
                  Keeping PHP updates to the latest version to avoid error
                  messages
                </div>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  Website security plugin
                </div>
                <div className="text-sm text-gray-500">
                  Several extra implementations to try keep your website secure
                  and out of harms way
                </div>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  Uptime monitoring
                </div>
                <div className="text-sm text-gray-500">
                  Consistent monitoring of your website to check it's up and
                  running smoothly
                </div>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  Plugin licenses worth up to £796+VAT/year
                </div>
                <div className="text-sm text-gray-500">
                  Licenses for critical tools that allow your website to work as
                  you need it to
                </div>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Included
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  Extra website changes
                </div>
                <div className="text-sm text-gray-500">
                  Ad-hoc time each month for me to make website
                  changes/additions
                </div>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">-</div>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  1-hour (worth £48+VAT)
                </div>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  2-hours (worth £96+VAT)
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  Total Price
                </div>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">From £45+VAT/month</div>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">From £65+VAT/month</div>
              </td>
              <td className="px-3 py-3 sm:px-4 sm:py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">From £95+VAT/month</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-12">
        <p className="text-xs sm:text-sm text-gray-500">
          *Prices are subject to change based on specific requirements and
          website complexity.
        </p>
      </div>
    </>
  );
}
