const About = () => {

    return(
      <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
            <h2 className="text-2xl text-cyan-600 font-bold mb-6">FAQs</h2>
            <div class="mt-12 lg:mt-0 lg:col-span-2">
              <dl class="space-y-12">
                <div>
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    What's this site for?
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                      <b className="font-md text-cyan-700">Tweeprint</b> is a repository of interesting Twitter threads about preprints.
                  </dd>
                  <dd class="mt-2 text-base text-gray-500">
                      Tweeprint.com has an API that anyone can POST to, located at <a className="font-bold text-cyan-600" href="https://api.tweeprint.com/tweeprints/">api.tweeprint.com/tweeprints</a>
                  </dd>
                  <dd class="mt-2 text-base text-gray-500">
                    Or submit via the frontend, at <a className="font-bold text-cyan-600" href="https://tweeprint.com/submit/">tweeprint.com/submit</a>
                  </dd>
                  <dd class="mt-2 text-base text-gray-500">
                  If you want to get involved or have questions hit me up <a className="font-bold text-cyan-600" href="https://twitter.com/alexharston">on Twitter</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        )
};
export default About;