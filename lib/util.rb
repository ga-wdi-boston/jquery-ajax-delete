require 'ffaker'
require 'json'
require 'pry'

module PeopleApp
  module Util

    # class methods mixed in
    module ClassMethods
      attr_accessor :id

      def gen_id()
        # id class instance variable should
        # bd kept in each class mixed into.
        @id += 1
      end
    end

    # mixin class methods when this class in mixed
    # in with include keyword
    def self.included(host_class)
      host_class.extend(ClassMethods)
    end

    # obj -> hash
    def to_h
      Hash[*instance_variables.map do |v|
             value = instance_variable_get(v)
             value = value.to_h if value.respond_to?(:to_h)
             [v.to_s.sub('@','').to_sym, value]
      end.flatten]
    end

    def to_json
      self.to_h.to_json
    end

  end
end
