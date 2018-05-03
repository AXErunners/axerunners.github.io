require "helper"

class AwwYissTest < JekyllUnitTest
  should "render a div" do
    html = %Q[
      <div class="aww">
        Yiss
      </div>
    ]

    @joule.render(html)

    el = @joule.find(".aww")

    assert(el)
    assert(el.text.include?("Yiss"))
    assert(el["class"].include?("aww"))
  end
end
