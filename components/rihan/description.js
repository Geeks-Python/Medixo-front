import React, { Component } from 'react'

export default class describtion extends Component {
    render() {
        return (
            <div>
                <section class="relative px-5 py-16 bg-gray-100 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-32 " >
              <div class="flex flex-col lg:flex-row lg:-mx-8">
                <div class="w-full lg:w-1/2 lg:px-8">
                  <h2 class="mt-4 text-3xl font-bold leading-tight">Why choose the Medixo Center?</h2>
                  <p class="mt-2 leading-relaxed">Aenean ut tellus tellus. Suspendisse potenti. Nullam tincidunt lacus tellus,
                    sed aliquam est vehicula a. Pellentesque consectetur condimentum nulla, eleifend condimentum purus vehicula
                    in. Donec convallis sollicitudin facilisis. Integer nisl ligula, accumsan non tincidunt ac, imperdiet in
                    enim. Donec efficitur ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus
                    mi.</p>
                </div>

                <div class="w-full mt-12 md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt:md-0">
                  <div class="w-full bg-gray-400 rounded-lg h-72"></div>

                  <p class="mt-2 text-sm italic text-center">Aenean ante nisi, gravida non mattis semper.</p>
                </div>
              </div>
            </section>
            </div>
        )
    }
}
