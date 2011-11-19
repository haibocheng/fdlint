module XRay
  module JS
    module Expr 

      module Expr 
        
        def parse_expression
          # function
          if check /function\b/
            parse_function_declaration
          else
            parse_expr_primary
          end
        end

        def parse_expr_assignment
          log 'parse expr assignment'
          parse_expression
        end

        protected

        def parse_expr_with_operate(left, pattern = nil, right = nil, &block)
          block = block || lambda {
            if check pattern
              op = scan pattern
              [op.text, right ? self.send(right) : nil]
            end
          }

          expr = self.send left
          while (ret = block.call) 
            expr = Expression.new ret[0], expr, ret[1]
          end 

          log "  #{expr}"
          expr
        end
         
      end

    end
  end
end
