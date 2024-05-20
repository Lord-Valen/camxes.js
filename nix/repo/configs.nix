{ inputs, cell }:
let
  inherit (inputs) std nixpkgs;
  inherit (std.lib) dev cfg;
  inherit (dev) mkNixago;
in
with cfg;
{
  editorconfig = (mkNixago editorconfig) {
    hook.mode = "copy";
    data = {
      root = true;

      "*" = {
        end_of_line = "lf";
        insert_final_newline = true;
        trim_trailing_whitespace = true;
        charset = "utf-8";
        indent_style = "space";
        indent_size = 2;
      };

      "*.{diff,patch}" = {
        end_of_line = "unset";
        insert_final_newline = "unset";
        trim_trailing_whitespace = "unset";
        indent_size = "unset";
      };

      "*.md" = {
        max_line_length = "off";
        trim_trailing_whitespace = false;
      };

      "{LICENSES/**,LICENSE}" = {
        end_of_line = "unset";
        insert_final_newline = "unset";
        trim_trailing_whitespace = "unset";
        charset = "unset";
        indent_style = "unset";
        indent_size = "unset";
      };
    };
  };

  conform = (mkNixago conform) {
    data = {
      inherit (inputs) cells;
      commit = {
        header = {
          length = 89;
        };
        conventional = {
          types = [
            "build"
            "chore"
            "ci"
            "docs"
            "feat"
            "fix"
            "perf"
            "refactor"
            "style"
            "test"
          ];
          scopes = [ ];
        };
      };
    };
  };

  treefmt = (mkNixago treefmt) {
    packages = with nixpkgs; [
      nixfmt-rfc-style
      nodePackages.prettier
    ];
    data = {
      formatter = {
        nix = {
          command = "nixfmt";
          includes = [ "*.nix" ];
        };
        prettier = {
          command = "prettier";
          options = [ "--write" ];
          includes = [
            "*.css"
            "*.html"
            "*.js"
            "*.json"
            "*.jsx"
            "*.md"
            "*.mdx"
            "*.scss"
            "*.ts"
            "*.tsx"
            "*.yaml"
          ];
          excludes = [ "pnpm-lock.yaml" ];
        };
      };
    };
  };

  lefthook = (mkNixago lefthook) {
    data = {
      commit-msg.commands.conform = {
        # allow WIP, fixup!/squash! commits locally
        run = ''
          [[ "$(head -n 1 {1})" =~ ^WIP(:.*)?$|^wip(:.*)?$|fixup\!.*|squash\!.* ]] ||
          conform enforce --commit-msg-file {1}'';
        skip = [
          "merge"
          "rebase"
        ];
      };
      pre-commit.commands.treefmt = {
        run = "treefmt --fail-on-change {staged_files}";
        skip = [
          "merge"
          "rebase"
        ];
      };
    };
  };
}
