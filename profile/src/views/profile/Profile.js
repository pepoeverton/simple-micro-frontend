import React from "react";

export default function Profile() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          User Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          Personal details.
        </p>
      </div>
      <div>
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              Fulano da silva
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Role
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              Software Engineer
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              fulano@email.com
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              About
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt lobortis feugiat vivamus at. Sit amet purus gravida quis
              blandit. Amet facilisis magna etiam tempor orci eu lobortis
              elementum nibh. Velit scelerisque in dictum non consectetur a erat
              nam. Ut morbi tincidunt augue interdum velit euismod in. Egestas
              integer eget aliquet nibh praesent. Amet risus nullam eget felis
              eget nunc lobortis mattis aliquam. Nam at lectus urna duis
              convallis. Arcu felis bibendum ut tristique et egestas quis ipsum
              suspendisse. Iaculis eu non diam phasellus. Ipsum nunc aliquet
              bibendum enim facilisis. Sagittis orci a scelerisque purus semper.
              Bibendum enim facilisis gravida neque convallis a cras semper
              auctor. Praesent tristique magna sit amet purus gravida quis
              blandit turpis.
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Social
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              none.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
