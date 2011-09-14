require_relative '../../helper'

module XRayTest
  module HTML
    module Parser

      class ParseWithMultiChildrenTest < Test::Unit::TestCase
        ParseError = XRay::ParseError
        Element = XRay::HTML::Element
        TextElement = XRay::HTML::TextElement
        
        def setup
          @parser = XRay::HTML::Parser.new('<em>important</em> information!! Attention please!')
          @element = @parser.parse
        end

        def test_type_is_Array
          assert @element.is_a?(Array), 'must be an array'
        end

        def test_content_must_be_right
          assert_equal [
            Element.new('em', nil, [TextElement.new('important')]),
            TextElement.new(' information!! Attention please!')
          ],@element, 'must contain two children'
        end

      end

    end
  end
end
